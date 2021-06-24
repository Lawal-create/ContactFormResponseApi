const chai=require("chai")
const server=require("../server")
const chaiHttp=require("chai-http")
process.env.NODE_ENV==="test"
const randomEmail=require("random-email")

//Assertion Style
chai.should()

chai.use(chaiHttp)

let email=randomEmail({ domain: 'gmail.com' })

const newUser={
    inquiry:"4",
    Firstname:"Hameed",
    Lastname:"Kareem",
    EmailAddress:`${email}`,
    PhoneNumber:"08059634077"
}

const errorUser={
    inquiry:"4",
    Firstname:"Hameed",
    Lastname:"Kareem",
    PhoneNumber:"08059634077"
}

describe("*********USER*********",()=>{
    describe("/POST /",()=>{
        it("it makes sure the user is created",(done)=>{
            chai
            .request(server)
            .post("/")
            .send(newUser)
            .end((err,res)=>{
                res.should.have.status(200)
                done()
            })
        })
    })

        it("it makes sure the user is not created",(done)=>{
            chai
            .request(server)
            .post("/")
            .send(errorUser)
            .end((err,res)=>{
                res.should.have.status(500)
                done()
            })
        })

        describe("/GET /",()=>{
            it("it  give a contact user list",(done)=>{
                chai
                .request(server)
                .get("/")
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
            })

            it("it doesn't give a contact user list",(done)=>{
                chai
                .request(server)
                .get("/a")
                .end((err,res)=>{
                    res.should.have.status(404)
                    res.body.should.be.a('object')
                    done()
                })
            })
        })
})


