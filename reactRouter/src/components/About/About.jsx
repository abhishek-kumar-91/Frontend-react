import React from 'react'

function About() {
  return (
    <>
        <div className=' flex justify-center items-center w-screen h-[95vh] '>
            <div className='w-[70vw] h-[60vh] border-solid border-8 border-orange-500 rounded-md flex flex-col justify-center items-center px-10'>
                <h1 className='text-gray-800 font-extrabold text-xl'>About US</h1>
                <p className='text-gray-500 font-medium'>Startups are dynamic ventures that embody innovation, ambition, 
                    and entrepreneurship. They represent the nucleus of transformation 
                    in today's business landscape. These fledgling companies emerge from
                    the minds of visionaries, armed with disruptive ideas and a desire to
                    solve real-world problems. Startups foster a culture of adaptability 
                    and risk-taking, often challenging established norms and industries. 
                    They operate in a fast-paced, ever-evolving environment, constantly
                    seeking opportunities for growth and market expansion. While many
                    startups face the daunting task of overcoming obstacles and securing
                    funding, they possess the potential to revolutionize industries, 
                    create jobs, and shape the future. The startup ecosystem is a crucible 
                    of creativity, fueling technological advancements and driving economic progress.</p>
            </div>
        </div>
    </>
  )
}

export default About