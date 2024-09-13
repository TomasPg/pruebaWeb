import Button from 'react-bootstrap/Button';

function Buttons() {
  return (
    <>
    <div className='button-section'>
      <Button style={{borderRadius:0, fontSize:'150%', width:'15%'}} variant="outline-light">Buy Now</Button>
      <Button style={{borderRadius:0, fontSize:'150%', width:'15%'}} variant="outline-light">Contact</Button>
    </div>
    </>
  );
}

export default Buttons;