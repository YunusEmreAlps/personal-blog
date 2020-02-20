import React, {Component} from 'react';

class Form extends Component {

    state = {
        name: '',
        email: '',
        subject: 'Just to say hi',
        message: '',
        emailStatus: ''
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {name, email, subject, message} = this.state;

        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            
            // update the response state and the step
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
              
        //open the request with the verb and the url
        xhr.open('GET', 'http://yunusemrealpuu.herokuapp.com/api/contact.php?sendto=' + email +  // HATALI KISIM !
                                '&subject=' + subject +  
                                '&name=' + name + 
                                '&message=' + message);
        
        // send the request
        xhr.send();

        // reset the fields
        this.setState({

            name: '',
            email: '',
            subject: 'Just to say hi',
            message: ''
        });
        e.preventDefault();
    }

    render(){
        const {name, email, subject, message, emailStatus} = this.state;
        return(
                <div className="container" id="cform" onSubmit={this.submitForm}>            
                    {emailStatus ? emailStatus : null}
                    <h1 className="text-center display-4">Get Contact</h1> {/* title */}  
                     <form action="contact.php">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Full name</label>
                            <input className="form-control" type="text" value={name} onChange={this.handleCHange('name')} placeholder="Full name" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">E-mail</label>
                            <input className="form-control" type="text" value={email} onChange={this.handleCHange('email')} placeholder="E-mail" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Subject</label>
                            <select className="form-control dropdown-toggle"  id="exampleFormControlSelect1" value={subject} onChange={this.handleCHange('subject')} placeholder="Subject" required>
                                <option value="DEFAULT" disabled>Choose a subject ...</option>
                                <option value="Just to say hi" selected>Just to say hi</option>
                                <option value="Business">Business</option>
                                <option value="Software">Software</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={message} onChange={this.handleCHange('message')} rows="5" placeholder="Your message"></textarea>
                        </div>  
                        <button className="btn mb-4" value="Submit">Submit</button>
                        <style jsx>{`
                             .btn {
                                background-color: #00b489;
                                color: white;
                              }
                              ::selection {
                                color: #00b489;
                              }
                        `}</style>
                    </form>
                </div>
                  
        );

    }

}
export default Form;