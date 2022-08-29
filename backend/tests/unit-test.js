import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

const should = chai.should();

chai.use(chaiHttp);

describe('Get All Forecasts Service', () => {
    it('should return all the forecasts', (done) => {
        chai.request(app)
            .get('/api/forecasts')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecastsArr.length.should.equal(3);
                done();
            })
    })

    it('should return Rain as the first entry', (done) => {
        chai.request(app)
            .get('/api/forecasts')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecastsArr[0].should.equal("Rain");
                done();
            })
    })

    it('should return clear as the second entry', (done) => {
        chai.request(app)
            .get('/api/forecasts')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecastsArr[1].should.equal("Clear");
                done();
            })
    })

    it('should return Windy as the third entry', (done) => {
        chai.request(app)
            .get('/api/forecasts')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecastssArr[2].should.equal("Windy");
                done();
            })
    })
}) 

describe('Get Forecast Service', () => {
    it('should return cloudy as the first entry', (done) => {
        chai.request(app)
            .get('/api/forecasts/0')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecast.should.equal("Cloudy");
                done();
            })
    })

    it('should return Windy as the second entry', (done) => {
        chai.request(app)
            .get('/api/forecasts/1')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecast.should.equal("Windy");
                done();
            })
    })

    it('should return Sunny as the third entry', (done) => {
        chai.request(app)
            .get('/api/forecasts/2')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.forecast.should.equal("Sunny");
                done();
            })
    })
}) 

describe('Post Forecast Service', () => {
    it('should creare a new forecast called Cloudy ', (done) => {
        const forecast = { forecast: "Cloudy" };
        chai.request(app)
            .post('/api/forecasts/')
            .send(forecast)
            .end((err, res) => {
                chai.request(app)
                .get('/api/forecasts')
                .end((err, res) => {
                    res.status.should.equal(200);
                    res.body.forecastsArr.length.should.equal(4);
                    res.body.forecastsArr[5].should.equal("Rain");
                    done();
                })
            })
    })

})

describe('Get Forecast by Location', () => {
    it('should return the forecast requested by location Dallas', (done) => {
        const forecast = { forecast: "Rain" };
        chai.request(app)
        .get('/api/forecasts/location/Dallas')
        .end((err, res) => {
            res.status.should.equal(200);
            res.body.forecast.should.equal("Rain");
            done();
        })
    })    
})

describe('Delete Forecast by Id', () => {
    it('should delete the forecast requested by id', (done) => {
        chai.request(app)
        .delete('/api/forecasts/1')
        .end((err, res) => {
            res.status.should.equal(204);
            done();
        })
    })    
})