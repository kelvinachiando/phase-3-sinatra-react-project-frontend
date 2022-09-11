// import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function AvatarCard({avatar, handleImageClick}){


  return (
        
        <Card onClick={() => {handleImageClick(avatar.id)}}>
          <Card.Content>
          <Image alt="oh no!" src={avatar.image_url} wrapped ui={true} />
            <Card.Header>
          {avatar.name}
          </Card.Header>
          <Card.Meta>
          {avatar.meta}
          </Card.Meta>
          <Card.Description>
          {avatar.description}
            </Card.Description>
          </Card.Content>
        </Card>
      );
    
}

export default AvatarCard