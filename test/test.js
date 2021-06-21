const app=require("../app")
const request=require("supertest")
const { MongoClient } = require("mongodb");

beforeAll(()=>{
  process.env.NODE_ENV="test"
})

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.DATABASE_LOCALHOST, {
      useNewUrlParser: true
    });
    db = await connection.db(process.env.DATABASE_NAME_TEST);
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = {
      inquiry:"2",
      Firstname:"Hameed",
      Lastname:"Lawal",
      EmailAddress:"lawinohal@gmail.com",
      PhoneNumber:"08065364077",
    };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ Firstname:"Hameed" });
    expect(insertedUser).toEqual(mockUser);
  });
  
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