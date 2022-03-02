import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText,newtext: state.newtext};
    case "toggleShowText":
      return { count: state.count, showText: !state.showText,newtext: !state.newtext };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true , newtext: false});

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });

        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
      {state.newtext && <p>New text</p>}
    </div>
  );
};

export default ReducerTutorial;