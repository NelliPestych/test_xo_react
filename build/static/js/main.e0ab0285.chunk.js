(this.webpackJsonptest_xo_react=this.webpackJsonptest_xo_react||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),i=s(3),r=s.n(i),c=(s(13),s(4)),l=s(5),u=s(6),o=s(8),d=s(7),h=(s(14),s(0)),j=function(t){Object(o.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).handleChange=function(t){var e=t.target,s=e.name,n=e.value;a.setState(Object(c.a)({},s,n))},a.handleSubmit=function(t){t.preventDefault()},a.isWinner=function(){for(var t=a.state.count%2===0?"\u2740":"\u2661",e=a.state.count%2===0?a.state.player1:a.state.player2,s=0;s<8;s++){var n=a.winnerLine[s];a.state.squares[n[0]]===t&&a.state.squares[n[1]]===t&&a.state.squares[n[2]]===t&&a.state.count%2===0?(a.setState({playerX:a.state.playerX+1}),a.setState({winner:!0}),console.log(a.state.playerX+1),setTimeout((function(){alert(e+"_wins")}),2e3),setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0}),a.setState({winner:!1})}),3e3)):a.state.squares[n[0]]===t&&a.state.squares[n[1]]===t&&a.state.squares[n[2]]===t&&a.state.count%2!==0?(a.setState({playerO:a.state.playerO+1}),a.setState({winner:!0}),console.log(a.state.playerO+1),setTimeout((function(){alert(e+"_wins")}),2e3),setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0}),a.setState({winner:!1})}),3e3)):a.state.squares[0]===t&&a.state.squares[1]===t&&a.state.squares[2]===t?(a.setState({winner0:!0}),setTimeout((function(){a.setState({winner0:!1})}),3500)):a.state.squares[3]===t&&a.state.squares[4]===t&&a.state.squares[5]===t?(a.setState({winner1:!0}),setTimeout((function(){a.setState({winner1:!1})}),3500)):a.state.squares[6]===t&&a.state.squares[7]===t&&a.state.squares[8]===t?(a.setState({winner2:!0}),setTimeout((function(){a.setState({winner2:!1})}),3500)):a.state.squares[0]===t&&a.state.squares[3]===t&&a.state.squares[6]===t?(a.setState({winner3:!0}),setTimeout((function(){a.setState({winner3:!1})}),3500)):a.state.squares[1]===t&&a.state.squares[4]===t&&a.state.squares[7]===t?(a.setState({winner4:!0}),setTimeout((function(){a.setState({winner4:!1})}),3500)):a.state.squares[2]===t&&a.state.squares[5]===t&&a.state.squares[8]===t?(a.setState({winner5:!0}),setTimeout((function(){a.setState({winner5:!1})}),3500)):a.state.squares[0]===t&&a.state.squares[4]===t&&a.state.squares[8]===t?(a.setState({winner6:!0}),setTimeout((function(){a.setState({winner6:!1})}),3500)):a.state.squares[2]===t&&a.state.squares[4]===t&&a.state.squares[6]===t?(a.setState({winner7:!0}),setTimeout((function(){a.setState({winner7:!1})}),3500)):a.state.squares.includes(null)||!0===a.state.winner||setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0})}),3500)}},a.clickHandler=function(t){var e=t.target.getAttribute("data"),s=a.state.squares;null===s[e]?(s[e]=a.state.count%2===0?"\u2740":"\u2661",a.setState({count:a.state.count+1}),a.setState({squares:s})):alert("\u042d\u0422\u041e \u041f\u041e\u041b\u0415 \u0423\u0416\u0415 \u0417\u0410\u041f\u041e\u041b\u041d\u0415\u041d\u041e!"),a.isWinner()},a.state={squares:Array(9).fill(null),count:0,player1:"",player2:"",playerX:0,playerO:0,winner0:!1,winner1:!1,winner2:!1,winner3:!1,winner4:!1,winner5:!1,winner6:!1,winner7:!1,winner:!1},a.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a}return Object(u.a)(s,[{key:"render",value:function(){var t=this.state,e=t.player1,s=t.player2,a=t.playerX,n=t.playerO;return Object(h.jsxs)("div",{className:"main-desktop",children:[e&&s?Object(h.jsx)("div",{}):Object(h.jsxs)("form",{className:"players",onSubmit:this.handleSubmit,children:[Object(h.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0418\u0433\u0440\u043e\u043a\u0430 1",onChange:this.handleChange,name:"player1",value:e}),Object(h.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0418\u0433\u0440\u043e\u043a\u0430 2",onChange:this.handleChange,name:"player2",value:s})]}),e&&s?Object(h.jsxs)("div",{children:[this.state.squares.includes(null)||!0===this.state.winner?Object(h.jsx)("div",{}):Object(h.jsx)("div",{className:"counter",children:"\u041d\u0418\u0427\u042c\u042f!"}),Object(h.jsxs)("div",{className:"tic-tac-toe",children:[Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"0",children:this.state.squares[0]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"1",children:this.state.squares[1]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"2",children:this.state.squares[2]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"3",children:this.state.squares[3]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"4",children:this.state.squares[4]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"5",children:this.state.squares[5]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"6",children:this.state.squares[6]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"7",children:this.state.squares[7]}),Object(h.jsx)("div",{className:"ttt-grid",onClick:this.clickHandler,data:"8",children:this.state.squares[8]}),this.state.winner0?Object(h.jsx)("div",{className:"line-through"}):Object(h.jsx)("div",{}),this.state.winner1?Object(h.jsx)("div",{className:"line-through1"}):Object(h.jsx)("div",{}),this.state.winner2?Object(h.jsx)("div",{className:"line-through2"}):Object(h.jsx)("div",{}),this.state.winner3?Object(h.jsx)("div",{className:"line-through3"}):Object(h.jsx)("div",{}),this.state.winner4?Object(h.jsx)("div",{className:"line-through4"}):Object(h.jsx)("div",{}),this.state.winner5?Object(h.jsx)("div",{className:"line-through5"}):Object(h.jsx)("div",{}),this.state.winner6?Object(h.jsx)("div",{className:"line-through6"}):Object(h.jsx)("div",{}),this.state.winner7?Object(h.jsx)("div",{className:"line-through7"}):Object(h.jsx)("div",{})]}),Object(h.jsxs)("div",{className:"counter",children:[e," : ",a]}),Object(h.jsxs)("div",{className:"counter",children:[s," : ",n]})]}):Object(h.jsx)("div",{className:"notification",children:"\u0412\u0412\u0415\u0414\u0418\u0422\u0415 \u0418\u041c\u0415\u041d\u0410 \u0418\u0413\u0420\u041e\u041a\u041e\u0412"})]})}}]),s}(n.a.Component),b=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.e0ab0285.chunk.js.map