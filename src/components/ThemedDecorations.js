import React from 'react';

class ThemedDecorations extends React.Component {

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}

export default ThemedDecorations;