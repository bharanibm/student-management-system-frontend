import { toast } from "react-toastify";

const handleApiError = (error) => {

    const response = error.response;

    if (response?.status === 400 && response.data) {

        Object.values(response.data).forEach((message) => {
            toast.error(message);
        });

    } else if (response?.status === 404) {

        toast.error(
            response.data?.error || "Requested student not found!"
        );

    } else if (response?.status === 500) {

        toast.error("Internal server error!");

    } else {

        toast.error("Something went wrong. Please try again!");

    }
};

export default handleApiError;