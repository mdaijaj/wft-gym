import '../App.css'

const Footer=()=>{
    return(
        <>
        <h1>Footer Page</h1>
        <div className="footer" style={{backgroundColor: "black"}}>
    <div className='row'> 
        <div className='col-3'></div>
        <div className='col-3'>Quick Links 
            <div className='p2'>
                <p> <a href='#'>About </a></p>
                <p>FAQS</p>
                <p>Privacy Policy</p>
                <p>WTF in News</p>
                <p>Term Conditions</p>
                <p>Refund & Cancellation</p>
            </div>
        </div>
        <div className='col-3'>Explore 
            <div className='p2'>
                <p> Arenas</p>
                <p> Studio</p>
                <p> Nutrition</p>
            </div>
        </div>
        <div className='col-3'>Contact
            <div className='p2'>
                <p> Noida Sector 76 Utter Pradesh <br/>
                    Delhi cily center India</p>
                <p> +91 8826616653</p>
                <p> aijaj535@gmail.com</p>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}

export default Footer;