import { Modal, Spinner, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PROJECT_API_ENDPOINT, UPVOTE_API_ENDPOINT, USER_API_ENDPOINT } from "Services/Api/Endpoint";
import MyCarousel from "./MyCarousel";
import { useStateValue } from "Services/StateProvider/StateProvider";
import Comments from "./Comments/Comments";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


export default function ProjectPopup() {
  let location = useLocation();
  const [{ user,upvotes }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);
  const [artistData, setArtistData] = useState(null);
  const [show, setShow] = useState(true);
  const history = useHistory();

  const handleHide = () => {
    setShow(false);
    history.goBack();
  };

  const handleDownvote = async (event) => {
    event.preventDefault();
    await axios.put(`${PROJECT_API_ENDPOINT}/${projectData.id}`, {
      ...projectData,
      upvote: projectData.upvote - 1
    })
    .then((response) => {
      setProjectData(response.data)
      dispatch({
        type: 'DOWNVOTE',
        projectId: projectData.id
      })
    })
    .catch((error) => {
      console.log(error.message)
    })
    await axios({
      //!--이거 왜 안되는 지 알려주실 분..--!
      method: 'delete',
      url: `${UPVOTE_API_ENDPOINT}?user_id=${user.uid}&upvoted_project_id=${projectData.id}`
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.messsage)
    })
  }

  const handleUpvote = async (event) => {
    event.preventDefault();
    await axios.put(`${PROJECT_API_ENDPOINT}/${projectData.id}`, {
      ...projectData,
      upvote: projectData.upvote + 1
    })
    .then((response) => {
      setProjectData(response.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
    await axios.post(`${UPVOTE_API_ENDPOINT}`, {
      user_id: user.uid,
      upvoted_project_id: projectData.id
    })
    .then((response) => {
      dispatch({
        type: 'UPVOTE',
        projectId: projectData.id
      })
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const fetchArtistData = async (userId) => {
    await axios.get(`${USER_API_ENDPOINT}/${userId}`)
    .then((response) => {
        setArtistData(response.data)
        setLoading(false)
    })
    .catch((error) => {
        console.log(error.message)
    })
}

  useEffect(() => {
    const projectId = history.location.pathname.split("/").pop()
    axios.get(`${PROJECT_API_ENDPOINT}/${projectId}`)
    .then((response) => {
      fetchArtistData(response.data.user_id)
      setProjectData(response.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <>
      {
        loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Modal
            size="lg"
            show={show}
            onHide={handleHide}
            aria-labelledby="my-modal"
            scrollable={true}
          >
            <Modal.Header closeButton>
              <Modal.Title id="my-modal">
                <img src={artistData.image} alt="" style={{width: '50px', height: '50px'}}/>
                <div>
                    <h1>This is {projectData.title}</h1>
                    <h3>{artistData.nickname}</h3>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="projectPopup__upvote">
                    {projectData.upvote}
                </div>
                {
                  upvotes.find(element => element === projectData.id) ? (
                      <Button variant="secondary" onClick={handleDownvote}>Downvote</Button>
                    ) : (
                      <Button variant="primary" onClick={handleUpvote}>Upvote</Button>
                  )
                }
                <div className="projectPopup__rank">
                    Rank #{projectData.rank}
                    <span>{projectData.created_at}</span>
                </div>
                <MyCarousel imageList={projectData.image} />
                <h2>Description</h2>
                <div className="projectPopup__description">
                    {projectData.desc}
                </div>
                <div className="projectPopup__button">
                  <Button>BETA</Button>
                  <Button>PURCHASE</Button>
                </div>
                <div className="projectPopup__comments">
                  <Comments projectId={projectData.id} comments={projectData.comments} />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )
      }
    </>
  );
}