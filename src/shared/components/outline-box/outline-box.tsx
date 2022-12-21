
const OutlineBox = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className='outlinebox'>
      <p className='box-text'>{text}</p>
    </div>
  );
};

export default OutlineBox;
