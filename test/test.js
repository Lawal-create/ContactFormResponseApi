const app=require("../app")
const request=require("supertest")


beforeAll(()=>{
  process.env.NODE_ENV="test"
})


describe("GET /",()=>{

  describe("having all the required fields filled with json object been returned as response",()=>{

    test("Should get all users", async()=>{

      const response=await request(app).get("/").send({
        inquiry:"2",
        Firstname:"Hakeem",
        Lastname:"Lawal",
        EmailAddress:"lawizyhal@gmail.com",
        PhoneNumber:"08059634077",
      })
      expect(response.statusCode).toBe(200)
      })

      test("Should specify json in the content type header", async()=>{

        const response=await request(app).get("/").send({
          inquiry:"2",
          Firstname:"Hakeem",
          Lastname:"Lawal",
          EmailAddress:"lawizyhal@gmail.com",
          PhoneNumber:"08059634077",
        })
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
        })

  })

  describe("when a query is requested",()=>{
    test("should respond with a status code of 500",async()=>{
      const response= await request(app).get("/").send({
        Firstname:"Hakeem",
      })
      expect(response.statusCode).toBe(200)
    })


  })
})

describe("POST/",()=>{

  describe("Should get all users",()=>{

    test("User fills in all the required fields.", async()=>{

      const response=await request(app).post("/").send({
        inquiry:"2",
        Firstname:"Hakeem",
        Lastname:"Lawal",
        EmailAddress:"lawizyhal@gmail.com",
        PhoneNumber:"08059634077",
      })
      expect(response.statusCode).toBe(200)
      })

      test("Should specify text/html in the content type header.", async()=>{

        const response=await request(app).post("/").send({
          inquiry:"2",
          Firstname:"Hakeem",
          Lastname:"Lawal",
          EmailAddress:"lawizyhal@gmail.com",
          PhoneNumber:"08059634077",
        })
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("text/html; charset=utf-8"))
        })

  })

  describe("when a required field is not filled",()=>{
    test("should respon with a status code of 500",async()=>{
      const response= await request(app).post("/").send({
        Firstname:"Hakeem",
        Lastname:"Lawal",
        EmailAddress:"lawizyhal@gmail.com",
        PhoneNumber:"08059634077",
      })
      expect(response.statusCode).toBe(500)
    })


  })
})