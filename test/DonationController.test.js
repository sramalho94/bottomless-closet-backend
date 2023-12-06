require('dotenv').config({ path: '.env.local' })

// ENV config
process.env.NODE_ENV = 'test'
const request = require('supertest')
const app = require('../server')

// Get necessary models
const { Donation } = require('../models')
const { Initiative } = require('../models')
const { Donor } = require('../models')

describe('Test Donation controllers', () => {
  let testDonation
  let testInitiative
  let testDonor
  let testDonorId
  let testInitaitiveId
  let testDonationId

  beforeAll(async () => {
    testDonor = await Donor.create({
      firstName: 'test1',
      lastName: 'test',
      email: 'test',
      phoneNumber: '12345678'
    })

    testDonorId = testDonor.id

    testInitiative = await Initiative.create({
      title: 'TestInitiative'
    })

    testInitaitiveId = testInitiative.id

    testDonation = await Donation.create({
      donor_id: testDonorId,
      donationType: 'monthly',
      donationValue: 10,
      initiative_id: testInitaitiveId
    })

    testDonationId = testDonation.id
  })

  test('Create Donation', async () => {
    const response = await request(app).post('/api/donation').send({
      donationType: 'once',
      donationValue: 100,
      initiative_id: testInitaitiveId,
      donor_id: testDonorId,
      inMemoriam: 'Our Personal lives this week',
      comment: 'Testing',
      orgMatchName: 'testOrg'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.donations.donationType).toBe('once')
    expect(response.body.donations.donationValue).toBe(100)
    expect(response.body.donations.initiative_id).toBe(testInitaitiveId)
    expect(response.body.donations.donor_id).toBe(testDonorId)
    expect(response.body.donations.inMemoriam).toBe(
      'Our Personal lives this week'
    )
    expect(response.body.donations.comment).toBe('Testing')
    expect(response.body.donations.orgMatchName).toBe('testOrg')
  })

  test('Get All Donations', async () => {
    const response = await request(app).get('/api/donation')

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeGreaterThan(0)
  })

  test('Get Donation by id', async () => {
    const response = await request(app).get(`/api/donation/${testDonationId}`)

    expect(response.statusCode).toBe(200)
    expect(response.body.donationType).toBe('monthly')
    expect(response.body.donationValue).toBe(10)
    expect(response.body.initiative_id).toBe(testInitaitiveId)
    expect(response.body.donor_id).toBe(testDonorId)
  })

  test('Delete Donation', async () => {
    const response = await request(app).delete(
      `/api/donation/${testDonationId}`
    )

    expect(response.statusCode).toBe(204)
  })

  afterAll(async () => {
    try {
      await Donor.destroy({ truncate: { cascade: true } })
      await Donation.destroy({ truncate: { cascade: true } })
      await Initiative.destroy({ truncate: { cascade: true } })
    } catch (error) {
      console.error('Error cleaning up test data', error)
    }
  })
})
