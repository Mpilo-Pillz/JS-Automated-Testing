const fetchData = () => {
    console.log('MOCKING');
    return Promise.resolve({ title: 'delectus aut autem' })
};

exports.fetchData = fetchData;
