import reactDom from 'react-dom';

const Container = ({ children }) => {
  const el = document.getElementById('modal');
  return reactDom.createPortal(children, el);
};

export default Container;
