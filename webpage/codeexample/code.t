h1 {
            font-size: 4rem;
            font-weight: 600;
            color: #f4c741;
            text-transform: uppercase;
            font-family: serif;
            padding: 5px;
            background-color: #ffffff;
            display: inline-block;
            animation: animateText 4s ease-in-out infinite;
        }

        @keyframes animateText {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            50% {
                transform: scale(1.2);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }