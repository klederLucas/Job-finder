import BaseError from "./baseError.js";
import { StatusCodes } from "http-status-codes";

class UnauthenticatedError extends BaseError{
	constructor(message) {
		super(message);
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}

export default UnauthenticatedError;