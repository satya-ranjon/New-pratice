class myContex {
  constructor(value) {
    this.value = value;
  }
  //Provider

  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  //Consumer
  Consumer = ({ children }) => {
    return children(this.value);
  };
}

export default function createContext(value = null) {
  const context = new myContex(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}
