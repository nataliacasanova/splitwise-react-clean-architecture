
const OutlineBox = (props: { text: string | number }) => {
  const { text } = props;
  return (
    <div className='outlinebox'>
      <p className='box-text'>{text}</p>
    </div>
  );
};

export default OutlineBox;
