import React from 'react';
import Dropzone from 'react-dropzone';
import { Alert, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setError, setJson } from '../actions';
import { bindActionCreators } from 'redux';

class DragAndDrop extends React.PureComponent {
  onDrop(files) {
    const reader = new FileReader();
    const {setError, setJson} = this.props;
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      try {
        const json = JSON.parse(fileAsBinaryString);
        setJson(json);
      } catch (error) {
        setError(error.toString());
      }
    };
    reader.onabort = () => setError('File reading was aborted.');
    reader.onerror = () => setError('File reading has failed.');
    reader.readAsBinaryString(files[0]);
  }

  render() {
    const {error, nodes} = this.props.data;
    return (
      <section className="drop-container">
        {
          error !== null
          &&
          <Alert bsStyle="danger" className="drop-container__message"><p>{error}</p></Alert>
        }
        {
          nodes !== null
          &&
          <Alert className="drop-container__message"><p>Found {nodes} object in json file.</p></Alert>
        }
        <Well className='drop-container__well'>
          <Dropzone onDrop={this.onDrop.bind(this)} className='drop-container__dropzone'>
            <p>Try dropping some files here, or click to <a>select</a> files to upload.</p>
          </Dropzone>
        </Well>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({setError, setJson}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DragAndDrop);
