import React from "react";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchRequest } from "../store/courts/actions";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import Button from "../components/Button";
import ResourceItem from "../components/ResourceItem";
import "../styles/Resources.css";

interface PropsFromStore {
  loading: boolean;
  items: { [key: string]: any }[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromStore & RouteComponentProps & PropsFromDispatch;

class Courts extends React.Component<AllProps> {
  render() {
    const { items, errors, fetchRequest } = this.props;

    return errors ? (
      <p>{errors}</p>
    ) : (
      <div className="resources__container">
        <header className="resources__heading">
          <h1>Courts resources</h1>
          <Button onClick={fetchRequest}>Fetch data</Button>
        </header>
        <div className="resources__item">
          {items.map(item => (
            <ResourceItem item={item}></ResourceItem>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ courts }: ApplicationState) => ({
  loading: courts.loading,
  errors: courts.errors,
  items: courts.items
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courts);
