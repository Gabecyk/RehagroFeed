import React from 'react'
import FormProfile from '../../components/FormProfile/FormProfile'
import './Profile.css'
import Grid from '@mui/material/Grid'
import PostCardDelete from '../../components/PostCard/PostCardDelete'
import SidebarProfile from '../../components/SideBarProfile/SideBarProfile'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <Grid container spacing={4} justifyContent="center">
        <SidebarProfile />
        <Grid>
          <FormProfile />
        </Grid>
      </Grid>
      <Grid>
        <PostCardDelete />
      </Grid>
    </div>
  )
}

export default Profile
