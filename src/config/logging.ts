/**  #Gunanya untuk gantiin console log */
const getTimeStamp = (): string => {
  return new Date().toISOString();
};

//CLG INFO
const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}, ${object}`);
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}]`);
  }
};

//CLG WARN
const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}, ${object}`);
  } else {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] [${message}]`);
  }
};

//CLG DEBUG
const debug = (namespace: string, message: string, object: object) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}, ${object}`);
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}]`);
  }
};

//CLG ERROR
const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}, ${object}`);
  } else {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] [${message}]`);
  }
};

export default { error, info, debug, warn };
