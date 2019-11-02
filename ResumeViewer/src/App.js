import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';

function App() {

    /*constructor(props){
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        }

    }*/
    /*-constructor(props) {
        -    super(props);
        -    this.state = {
            -      nextTodoId: 0,
            -      newTodoLabel: ""
        -    };
        -  }*/
    /*+const [todos, setTodos] = useState();
    +const [nextTodoId, setNextTodoId] = useState(0);
    +const [newTodoLabel, setNewTodoLabel] = useState("");*/

    /*const [resumeDatas, setResumeDatas] = useState();*/
    const [resumeData, setResumeData] = useState({});

    let getResumeData = () => {

        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                setResumeData(data);

            },
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    };
/* componentDidMount() {*/
    useEffect(() => {
        getResumeData();
    }, []);

/*    render() {*/
        console.log(resumeData);
        return (
            <div className="App">
                <Header data={resumeData.main}/>
                <About data={resumeData.main}/>
                <Resume data={resumeData.resume}/>
                <Portfolio data={resumeData.portfolio}/>
                <Testimonials data={resumeData.testimonials}/>
                <Contact data={resumeData.main}/>
                <Footer />
            </div>
        );
/*    }*/

}

export default App;
