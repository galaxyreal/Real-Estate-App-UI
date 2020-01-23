import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import TextButton from "react-native-button";
import { connect } from "react-redux";
import { AppStyles, ModalHeaderStyle, AppIcon } from "../AppStyles";
import Button from "react-native-button";

class BookingModal extends React.Component {
  constructor(props) {
    super(props);

    const listing = this.props.listing;
    this.state = {
      data: listing,
      content: "",
      starCount: 5
    };
  }

  onBookingConfirm = () => {
  };

  onCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={this.onCancel}
      >
        <View style={styles.body}>
          <View style={ModalHeaderStyle.bar}>
            <Text style={ModalHeaderStyle.title}>Fill booking details</Text>
            <TextButton
              style={{ ...ModalHeaderStyle.rightButton, paddingRight: 10 }}
              onPress={this.onCancel}
            >
              Cancel
            </TextButton>
          </View>
          <Text>Booking controls here</Text>
          <Button
            containerStyle={styles.btnContainer}
            style={styles.btnText}
            onPress={() => this.onBookingConfirm()}
          >
            Book
          </Button>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  input: {
    flex: 1,
    width: "100%",
    padding: 10,
    fontSize: 19,
    textAlignVertical: "top",
    justifyContent: "flex-start",
    paddingLeft: 0,
    paddingRight: 0,
    fontFamily: AppStyles.fontName.main,
    color: AppStyles.color.text
  },
  starRatingContainer: {
    padding: 10,
    width: 90,
    marginTop: 10
  },
  starStyle: {
    tintColor: AppStyles.color.tint
  },
  btnContainer: {
    width: "100%",
    backgroundColor: AppStyles.color.tint,
    marginTop: 10,
    padding: 10
  },
  btnText: {
    color: AppStyles.color.white
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(BookingModal);
