const React = window.React; //声明react是全局的react
const ReactDOM = window.ReactDOM;
const root = document.querySelector("#root");
let n = 0;
//用react创建一个div，div的className叫red，里面有一个n,以及一个按钮
const App = () =>
  React.createElement("div", { className: "blue" }, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          ReactDOM.render(App(), root);
        }
      },
      "+1"
    )
  ]);
//通过ReactDOM来把app渲染到root里面
ReactDOM.render(App(), root);
