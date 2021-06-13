import  {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

const Formulario = (props: any) => {
    const [usertext, updateText] = useState("");
    
    const onTextChange =  ( event:any ) => {
        switch(event.target.id){
            case "localtext":
                updateText(event.target.value);
            break
        }
    };
    const onSubmitClick = (event:any) =>{ 
        event.preventDefault();
        console.log (usertext);
        
        props.updateText ({usertext});

    }
   

    return(
        <Form onSubmit = {onSubmitClick}>
             <Form.Group controlId="exampleForm.ControlTextarea1">
                 <Form.Control value="usertext" id="localtext"
                  as="textarea" onChange={onTextChange} rows={3}  />
            </Form.Group>
            <Button   type="submit">
                Submit
            </Button>
        </Form>
           
    );
  
}

 export default Formulario;

