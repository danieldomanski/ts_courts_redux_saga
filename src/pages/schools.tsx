import React from "react";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import {
  Schools as SchoolsType,
  SCHOOLS_CACHE_KEY
} from "../store/schools/model";
import { fetchRequest, fetchSuccess } from "../store/schools/actions";

import Button from "../components/Button";
import CachedResource from "../components/CachedResource";

import "../styles/Resources.css";

interface PropsFromStore {
  loading: boolean;
  items: SchoolsType[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  fetchSuccess: typeof fetchSuccess;
}

type AllProps = PropsFromStore & RouteComponentProps & PropsFromDispatch;

class Schools extends React.Component<AllProps> {
  storage: CachedResource<SchoolsType>;

  constructor(props: AllProps) {
    super(props);
    this.storage = new CachedResource();
  }

  componentDidMount() {
    const { items, fetchSuccess } = this.props;
    const { isResourceCached, feedStoreFromCache } = this.storage;
    const isCached = isResourceCached("schools");
    const isResourceEmpty = items.length === 0;

    if (isResourceEmpty && isCached) {
      feedStoreFromCache(SCHOOLS_CACHE_KEY, fetchSuccess);
    }
  }

  componentDidUpdate() {
    const { items } = this.props;
    const { isResourceCached, saveToCache } = this.storage;
    const isCached = isResourceCached("schools");
    const isResourceEmpty = items.length === 0;

    if (!isResourceEmpty && !isCached) {
      saveToCache(SCHOOLS_CACHE_KEY, items);
    }
  }

  render() {
    const { items, errors, fetchRequest } = this.props;

    return errors ? (
      <p>{errors}</p>
    ) : (
      <div className="resources__container">
        <header className="resources__heading">
          <h1>School resources</h1>
          <Button onClick={fetchRequest}>Pobierz dane</Button>
        </header>
        <div className="resources__item">
          {items.map((item: any) => {
            const keys = Object.keys(item);

            return (
              <>
                <h3>{item["name"]}</h3>
                <ul>
                  {keys.map(key => (
                    <li>
                      <span className="resources__row__key">{key}:</span>
                      <span className="resources__row__key">{item[key]}:</span>
                    </li>
                  ))}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ schools }: ApplicationState) => ({
  loading: schools.loading,
  errors: schools.errors,
  items: schools.items
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
  fetchSuccess: (data: SchoolsType[]) => dispatch(fetchSuccess(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schools);
