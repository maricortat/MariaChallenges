import  {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

const Formulario = (props: any) => {
    const [usertext, updateText] = useState("");
    
    const onTextChange =  ( event:any ) => {
        
        const s: string = `[${JSON.stringify(event.target.value)}]`;
        const b: any  = JSON.parse(s);
        console.log(b)
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
                 <Form.Control  defaultValue= {"usertext"}  id="localtext"
                  as="textarea" onChange={onTextChange}  rows={3}  />
            </Form.Group>
            <Button   type="submit">
                Generate Chart
            </Button>
        </Form>
           
    );
  
}

 export default Formulario;

