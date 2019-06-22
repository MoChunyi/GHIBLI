import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridroot: {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: theme.shadows[15],
        padding: '16px 8px'
    },
    card: {
        boxShadow: theme.shadows[5],
        '& div': {
            textAlign: 'center'
        },
        height: '200px'
    },
    cardcontent: {
        textAlign: 'center'
    }
}))

const FilmsInfo = (props) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.gridroot} justify={'center'}>
            {console.log(props)}
            {
                props.filmsinfo && props.filmsinfo.map((item, index) => {
                    return (
                        <Grid  item key={index} xs={8} sm={6} md={4} style={{overflow: 'hidden'}}>
                            <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant={"h5"} style={{display: 'inline-block'}}>
                                        {item.title}
                                    </Typography>
                                    <Typography style={{overflowY: 'auto'}} >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
            <Grid item>
                <Button onClick={props.onSendRequest}>
                    SEND
                </Button>
            </Grid>
        </Grid>
    )
}

FilmsInfo.propTypes = {
    filmsinfo: PropTypes.array.isRequired,
    onSendRequest: PropTypes.func.isRequired
}
export default FilmsInfo;