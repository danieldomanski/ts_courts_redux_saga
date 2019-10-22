import React from "react";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchRequest } from "../store/schools/actions";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Schools as SchoolsModel } from "../store/schools/model";
import Button from "../components/Button";
import "../styles/Resources.css";

interface PropsFromStore {
  loading: boolean;
  items: SchoolsModel[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromStore & RouteComponentProps & PropsFromDispatch;

class Schools extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest();
  }

  render() {
    const { items, errors } = this.props;

    return errors ? (
      <p>{errors}</p>
    ) : (
      <div className="resources__container">
        <header className="resources__heading">
          <h1>School resources</h1>
          <Button>Pobierz dane</Button>
        </header>
        <div className="resources__item">
          {items.map(item => {
            const keys = Object.keys(item);
            return (
              <>
                <h2>{item["name"]}</h2>
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
  fetchRequest: () => dispatch(fetchRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schools);
