<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Successful Purchase! See you at Ultra 2024 🎉🎉🎉</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            margin-top: 0;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Successful Purchase!</h1>
        <p>Thank you for your purchase. Your order has been successfully processed.</p>
        <p>Here are the details of your purchase:</p>
        <ul>
            <li><strong>Product:</strong> {{ $name }}</li>
            <li><strong>Price: KSH </strong> ${{ $price/$amount }}</li>
            <li><strong>Quantity:</strong> {{ $amount }}</li>
            <li><strong>Total: KSH </strong> ${{ $price }}</li>
        </ul>
        <p>Thank you!</p>
    </div>
</body>

</html>
