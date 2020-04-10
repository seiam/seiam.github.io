import React , {useState} from 'react';
import {Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import file from './Resume_Seiam_Salehi.pdf'

import { Document, Page , pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        height: '100%'
    },
}));

export default function Resume(props) {

    const classes = useStyles();
    const [pageNumber] = useState(1);
    const [numPages, setNumPages] = useState(0);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
      }
    return (
        <Paper className={classes.paper}>
            <h2 className="m-2 p-2">Here is my resume!</h2>
            <div className="m-2 p-2">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        </Paper>
    );
}