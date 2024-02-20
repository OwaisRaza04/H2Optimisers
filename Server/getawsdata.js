import awsIot from 'aws-iot-device-sdk';

async function connectAndSubscribe() {
    return new Promise((resolve, reject) => {
        const device = awsIot.device({
            keyPath: 'a21a14852e68186e32f93f73876c50aac660c0772e1a6e07c94de034baf129b3-private.pem.key',
            certPath: 'a21a14852e68186e32f93f73876c50aac660c0772e1a6e07c94de034baf129b3-certificate.pem.crt',
            caPath: 'AmazonRootCA1.pem',
            clientId: 'iotconsole-55a8fd06-fa80-435a-9092-e886ee695814',
            host: 'a1wx3ns14amobv-ats.iot.us-east-2.amazonaws.com'
        });

        device.on('connect', function() {
            console.log('Connected to AWS IoT');
            device.subscribe('esp32/pub', function(err, granted) {
                if (err) {
                    console.error('Subscription error:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Subscribed to topic: esp32/pub');
                }
            });
        });

        device.on('message', function(topic, payload) {
            // console.log('Received message:', payload.toString());
            resolve(payload.toString()); // Resolve the promise with the payload
        });

        device.on('error', function(error) {
            console.error('Error:', error);
            reject(error); // Reject the promise if there's an error
        });
    });
}

export default connectAndSubscribe;