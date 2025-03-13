import React from 'react'

const Eduction = () => {
  return (
    <section className='px-5 py-3 my-5' id='eduction'>
        <h4 className='text-center mb-5'>Educ<span id='orange-color' >tion</span></h4>
        <div className='row'>
            <div className='col-12 col-md-6'>
                   <h6 className="text-center fw-semibold mb-4" id='orange-color' >College & School</h6>

                    <p className=' fw-semibold'>- Bachelor of Engineering -</p>
                    <p className='small'>Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College,Chennai <br/> CGPA : 8.33 || Pass-out : 2024</p>
                
                    <p className=' fw-semibold'>- Higher Secondary Education (XII) -</p>
                    <p className='small'>Gandhi Matriculation Higher Secondary School,Thanjavur<br/> PERCENTAGE : 61% || Duration : 2019 – 2020</p>

                    <p className=' fw-semibold'>- Secondary Education (X) -</p>
                    <p className='small'>Gandhi Matriculation Higher Secondary School,Thanjavur<br/> PERCENTAGE : 69% || Duration : 2017 – 2018</p>
            </div>
            
            <div className='col-12 col-md-6'>
                <h6 className="text-center fw-semibold mb-4" id='orange-color' >Project's</h6>
                
                <p className=' fw-semibold'>Website Project (HTML CSS JS BOOTSTRAP) |</p>
                <p className='small'>Website link : <a href="https://prathosh.neocities.org/project/simple-proj1" target="_blank">https://prathosh.neocities.org</a></p>


                <p className=' fw-semibold'>Bitcoin Sentiment Analysis Using Python |</p>
                <p className='small'>-A Bitcoin sentiment analysis project leverages Natural Language Processing (NLP) and Machine
                    Learning to assess public sentiment towards Bitcoin in real-time.<br/>

                    -It involves analyzing news articles, social media posts, and financial data using NLP techniques and
                    machine learning algorithms to gauge market sentiment and provide actionable insights for investors
                    and enthusiasts
                </p>
                <p className='small'>and many more project's...</p>

            </div>
        </div>
    </section>
  )
}

export default Eduction