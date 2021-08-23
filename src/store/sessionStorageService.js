import {applyMiddleware} from "redux";
import {addPackageAction} from "./reducer";

export const applySessionStorage = () => applyMiddleware(
    ({getState}) => {
        return next => action => {
            const returnValue = next(action);

            if (action.type === addPackageAction().type) {
                const packages = getState().packages;
                sessionStorage.setItem('packages', JSON.stringify(packages));
            }

            return returnValue;
        };
    }
);