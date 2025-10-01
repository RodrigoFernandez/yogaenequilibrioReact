const Exibidor = ({children, clase}) => {
  return (
    <div className={clase}>
      {children}
    </div>
  );
};

export default Exibidor;