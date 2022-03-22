import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container, ListGroup, ListGroupItem, Table } from 'react-bootstrap'

const Home = () => {

    const covidUrl = "https://api.covidtracking.com/v1/us/daily.json"
    const [covidInfirmation, setCovidInfirmation] = useState({});

    useEffect(() => {
        // Set up a cancellation source
        let source = axios.CancelToken.source();
        let categorySource = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                await axios({
                    method: 'get',
                    url: covidUrl
                })
                    .then(response => setCovidInfirmation({ data: response.data }))

            } catch (error) {
                // Is this error because we cancelled it ourselves?
                if (axios.isCancel(error)) {
                    console.log(`call for ${covidUrl} was cancelled`);
                } else {
                    throw error;
                }
            }
        };
        fetchData();
        return () => {
            // Let's cancel the request on effect cleanup
            source.cancel()
        };
    }, []);

    return (
        <div>
            <Container>
                <div className='col-lg-* col-md-* mb-*'>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th scope="row">Tarih</th>
                                <th scope="row">Günlük Vaka Sayısı</th>
                                <th scope="row">Günlük Ölüm Sayısı</th>
                                <th scope="row">Toplam Ölüm Sayısı</th>
                            </tr>
                        </thead>
                        <tbody>
                            {covidInfirmation.data?.map((item, i) => (

                                <tr key={item.date}>
                                    <th scope="row">{ i}</th>
                                    <td>{(item.date)}</td>
                                    <td>{item.positive}</td>
                                    <td>{item.deathIncrease}</td>
                                    <td>{item.death}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Home