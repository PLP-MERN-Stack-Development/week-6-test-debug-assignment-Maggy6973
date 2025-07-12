const request = require('supertest');
const app = require('../server');
const { validateBug } = require('../utils/validation');

describe('Bug API', () => {
  test('GET /api/bugs should return all bugs', async () => {
    const response = await request(app).get('/api/bugs');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/bugs should create a new bug', async () => {
    const newBug = {
      title: 'Test Bug',
      description: 'This is a test bug description',
      priority: 'high'
    };

    const response = await request(app)
      .post('/api/bugs')
      .send(newBug);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newBug.title);
  });

  test('should reject invalid bug data', async () => {
    const invalidBug = { title: 'AB' }; // Too short

    const response = await request(app)
      .post('/api/bugs')
      .send(invalidBug);

    expect(response.status).toBe(400);
  });
});

describe('Validation Utils', () => {
  test('validateBug should return valid for correct data', () => {
    const bugData = {
      title: 'Valid Title',
      description: 'Valid description with enough characters'
    };
    
    const result = validateBug(bugData);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('validateBug should return invalid for short title', () => {
    const bugData = {
      title: 'AB',
      description: 'Valid description'
    };
    
    const result = validateBug(bugData);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Title must be at least 3 characters');
  });
});