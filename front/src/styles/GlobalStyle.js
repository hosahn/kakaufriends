import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// css reset
const GlobalStyle = createGlobalStyle`
${reset}
*{
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

// book
*, *:before, *:after { 

}
*:before, *:after { 
  content: ""; 
  position: absolute; 
} 

body{
  font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Nanum Gothic', 'Malgun Gothic', sans-serif;
  box-sizing: border-box;
  position: relative;
 background-color: #fafafa;
 height: 100%;
 width: 100%;
}

#root{
  height: 100%;
  width: 100%;
}

button{
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button:hover{
  cursor: pointer;
}

input {
  background-color: transparent;
}
`;

export default GlobalStyle;
