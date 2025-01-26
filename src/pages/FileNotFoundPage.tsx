function FileNotFoundPage() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center text-muted">
          <div className="display-1">
            <img  src="https://img.icons8.com/ios/200/sad.png" alt="sad"/>
          </div>
          <h1 className="display-4 fw-bold">404</h1>
          <p className="fs-5">Page Not Found</p>
          <p className="small">
            The page you are looking for doesn't exist or another error occurred.
            <br />
            Go back, or head over to <a href="/">our homepage</a> to choose a new direction.
          </p>
        </div>
      </div>
    );
}

export default FileNotFoundPage;