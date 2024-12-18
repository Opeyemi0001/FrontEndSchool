import React from 'react'

const Blog = () => {
    return (
        <section className='container' style={{ marginTop: "100px" }}>

                <div className='row d-flex justify-content-between' >
                    <div className='col-12 col-sm-8' style={{ width: "700px" }}>
                        <h2 className='mt-5' style={{ width: "300px", fontWeight: '700', color: 'darkblue' }}>A Welcome Address
                            From the Principal</h2>

                        <hr style={{ width: '100px', border: '1px solid black' }} />

                        <p style={{ fontSize: '13px' }}>
                            On behalf of the management, staff and students of Chizzy kids group of schools, I welcome you to our official website.Chizzy kids Lagos is a school founded September 1909, situated at 26 Ichie dara avenue shibiri, Lagos ,excellence is our watch word, we believe that whatever is worth doing at all is worth doing well, we seek to establish this standard in our every operations and instill this value in our Wards.Every boy child committed in our care is guaranteed quality education under skilled instructors.  We aim to establish a solid foundation for all our Children through their academic and professional journey in life. We are also interested in the physical, social and psychological development of our Students, edging them to become responsible and impact driven  members of society.Our facilities are up-to-date making us infra-structurally positioned to deliver quality education to your children. We welcome applications from all parts of the country. We are ever ready to make Kings out of your male wards.Connect with us. We look forward to having a rewarding relationship with you.Welcome to our Website!

                            <p style={{ fontSize: '13px' }} className='mt-5'><i>Principal...</i></p>
                        </p>
                    </div>

                    <div className='col-12 col-sm-4'>
                        <img src="https://res.cloudinary.com/myskoolp/image/upload/w_500/v1/school_website/misc/kingscollegelagos/principal-566.jpg" alt="principal photo" className='img-fluid' style={{ width: "300px", height: "400px", marginLeft:"30px" }} />
                    </div>
                </div>
    

        </section>

    )
}

export default Blog