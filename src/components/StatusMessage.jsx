import React  from "react";

const StatusMessage = ({ isSuccess }) => <p className={isSuccess ? "success" : "error"}>{isSuccess ? "Success!" : "Error!"}</p>;

export default StatusMessage;