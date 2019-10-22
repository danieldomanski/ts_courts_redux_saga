import React from "react";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchRequest } from "../store/courts/actions";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import Button from "../components/Button";
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
          <Button onClick={fetchRequest}>Pobierz dane</Button>
        </header>
        <div className="resources__item">
          {items.map(item => {
            const keys = Object.keys(item);

            return (
              <>
                <h3>{item["name"]}</h3>
                <ul>
                  {keys.map(key => (
                    <li>
                      <span className="resources__row__key">{key}:</span>
                      <span>{JSON.stringify(item[key])}</span>
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
