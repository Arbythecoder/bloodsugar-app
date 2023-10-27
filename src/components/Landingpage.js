import './Landingpage.css'

function Landingpagedesign() {
    return(
        <div className='layout'>
            <div className='navbar'>NAVBAR</div>
            <div className='heroSection'>
                <div className='heromsg'>
                    <div className='herotext'>
                    <p className='herotext1'>Track your sugar levels over time and see your progress.</p>
                    <p className='herotext2'>Get actionable insights into your sugar levels to manage your diabetes better</p>
                    </div>
                    <button className='mainbutton'>Get Started</button>
                </div>
                <div className='heroframe'>
                    <img src="./heroimage.jpg" alt='hero'/>
                </div>
            </div>
            <div className='aboutsection'>
                <div className='about'>
                <h1 className='about-title'>About</h1>
                <p className='about-content'>We provide people with diabetes the necessary guidiance to manage their condition and stay healthy. 
                By tracking their blood sugar levels over time, people with diabetes can identify patterns and trends, which can help them to make informed decisions about their diet, exercise, and medication.  
                Our easy-to-use tracker allows you to log your blood sugar levels manually or by uploading data from your blood glucose meter. 
                You can also track other factors that can affect your blood sugar levels, such as diet, exercise, and medication.</p>
                </div>
            </div>
        </div>
    )
}
export default Landingpagedesign;