import { Button, IconButton } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <IconButton
                className="btn-primary"
                onClick={() => history.push( "/posts"
                  )
                }
              >
                <HomeIcon />
              </IconButton>

              <Button 
              
                className="btn-primary"
                onClick={() => history.push( "/tags/1")
                }
              >
                Rosetta
              </Button>

              <Button
                className="btn-primary"
                onClick={() => history.push( "/tags/2")
                }
              >
                Swan
              </Button>

              <Button
                className="btn-primary"
                onClick={() => history.push( "/tags/3")
                }
              >
                  Heart
              </Button>

              <Button
                className="btn-primary"
                onClick={() => history.push( "/tags/4")
                }
              >
                Tulip
              </Button>

      {
        localStorage.getItem("auth_token") !== null ?
          <Button variant="outlined" onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </Button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }
    </nav>
  )
}
