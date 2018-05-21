package com.github.boardyb.forum.response;

public class Response {

    private String responseMessage;
    private Integer statusCode;
    private String responseBody;

    public Response() {
    }

    private Response(String responseMessage, Integer statusCode, String responseBody) {
        this.responseMessage = responseMessage;
        this.statusCode = statusCode;
        this.responseBody = responseBody;
    }

    public static Response successfulResponseFor(String responseBody) {
        return new Response("Operation Successful", 200, responseBody);
    }

    public static Response errorResponseFor(String responseBody) {
        return new Response("Operation Failed", 500, responseBody);
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Response{");
        sb.append("responseMessage='").append(responseMessage).append('\'');
        sb.append(", statusCode=").append(statusCode);
        sb.append(", responseBody='").append(responseBody).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
