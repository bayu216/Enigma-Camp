import { Button, ButtonGroup } from "react-bootstrap";

export default function LockerPanel(props) {
  const { toggleLock, putShoes, isLocked, takeShoes, number, shoes } = props;
  return (
    // <>
    //   <div className="d-flex justify-content-between">
    //     <div>
    //       <div className={props.status === true ? "d-none" : ""}>
    //         <Button
    //           className="me-2 px-1 py-1"
    //           variant="primary"
    //           disabled={props.shoes >= 3 ? true : false}
    //           onClick={() => props.putshoes(props.idx)}
    //         >
    //           PutShoes
    //         </Button>
    //         <Button
    //           className="px-1 py-1"
    //           variant="primary"
    //           disabled={props.shoes <= 0 ? true : false}
    //           onClick={() => props.takeshoes(props.idx)}
    //         >
    //           TakeShoes
    //         </Button>
    //       </div>
    //     </div>
    //     <div>
    //       <Button
    //         className="px-1 py-1"
    //         variant={props.status === true ? "dark" : "light"}
    //         onClick={() => props.statlock(props.idx)}
    //       >
    //         {props.status === true ? "Unlock" : "Lock"}
    //       </Button>
    //     </div>
    //   </div>
    // </>
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            putShoes(number);
          }}
          variant="primary"
          size="sm"
          className="me-2"
          disabled={shoes === 3}
        >
          Put Shoes
        </Button>
        <Button
          onClick={() => {
            takeShoes(number);
          }}
          variant="primary"
          size="sm"
          disabled={shoes === 0}
        >
          Take Shoes
        </Button>
      </ButtonGroup>
      <Button
        onClick={() => {
          toggleLock(number);
        }}
        variant={isLocked ? "dark" : "light"}
        size="sm"
      >
        {isLocked ? "Unlock" : "Lock"}
      </Button>
    </>
  );
}
