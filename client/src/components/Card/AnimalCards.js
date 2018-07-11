import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

const animalCard = props => (
<Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Card>
          <Image alt={props.name} src={props.image || "https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"} />
          <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Description>{props.date}</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
</Grid>
)

export default animalCard;