// Design - Design Form

class DesignForm extends React.Component {

  componentDidMount() {
    const selectElement = document.querySelector('.file');
    selectElement.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      const filename = event.target.value.replace(/^.*[\\\/]/, '')
      result.textContent = `You selected: ${filename}`;
    });
  }

  render () {
    return (
      <form className="form" id="form">
        <fieldset>
          <legend>Legend</legend>
          <div className="form-errors">
            <div className="form-errors-box">
              <div className="form-errors-row">
                <p className="font-m">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              </div>
              <div className="form-errors-row">
                <p className="font-m">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              </div>
              <div className="form-errors-row">
                <p className="font-m">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <label>Text</label>
              <div className="input">
                <input type="text" />
              </div>
              <p className="label-reference">Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</p>
            </div>
            <div className="form-item">
              <p className="label required">File</p>
              <div className="file">
                <input type="file" className="file" id="fileID" />
                <label htmlFor="fileID" className="result">Please select a file</label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <label>Email</label>
              <div className="input">
                <input type="email" />
              </div>
            </div>
            <div className="form-item">
              <label>Password</label>
              <div className="input">
                <input type="password" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <label>Number</label>
              <div className="input">
                <input type="number" />
              </div>
            </div>

            <div className="form-item">
              <label>Select</label>
              <div className="select">
                <select id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-item">
              <label>Textarea</label>
              <div className="textarea">
                <textarea />
              </div>
            </div>
          </div>

          {/* Checkbox & Radio */}
          <div className="form-row">
            <div className="form-item">
              <p className="label">Label Checkbox</p>
              <div className="checkbox">
                <label htmlFor="checkbox">
                  Checkbox Item
                  <input type="checkbox" id="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="form-item">
              <p className="label">Label Radio</p>
              <div className="radio">
                <label htmlFor="radio">
                  Radio Item
                  <input type="radio" id="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Group Checkbox */}
          <div className="form-row">
            <div className="form-group">
              <p className="label-group">Label Group Checkbox</p>
              <div className="form-item">
                <div className="checkbox">
                  <label htmlFor="checkbox-1">
                    Checkbox Item 1
                    <input type="checkbox" id="checkbox-1" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="checkbox">
                  <label htmlFor="checkbox-2">
                    Checkbox Item 2
                    <input type="checkbox" id="checkbox-2" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="checkbox">
                  <label htmlFor="checkbox-3">
                    Checkbox Item 3
                    <input type="checkbox" id="checkbox-3" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="checkbox">
                  <label htmlFor="checkbox-4">
                    Checkbox Item 4
                    <input type="checkbox" id="checkbox-4" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Group Radio */}
          <div className="form-row">
            <div className="form-group">
              <p className="label-group">Label Group Radio</p>
              <div className="form-item">
                <div className="radio">
                  <label htmlFor="radio-1">
                    Radio Item 1
                    <input type="radio" id="radio-1" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="radio">
                  <label htmlFor="radio-2">
                    Radio Item 2
                    <input type="radio" id="radio-2" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="radio">
                  <label htmlFor="radio-3">
                    Radio Item 3
                    <input type="radio" id="radio-3" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-item">
                <div className="radio">
                  <label htmlFor="radio-4">
                    Radio Item 4
                    <input type="radio" id="radio-4" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="form-row">
            <div className="form-item">
              <div className="submit">
                <input value="Submit" type="submit" className="button-xl blue" />
              </div>
            </div>
          </div>

          {/* Form Menu */}
          <div className="form-menu">
            <div className="form-menu-box">
              <div className="form-menu-row">
                <a href="#" className="link-s gray wide text-center underline">Vulputate Ultricies Dolor Nullam</a>
              </div>
              <div className="form-menu-row">
                <a href="#" className="link-s gray wide text-center underline">Ultricies Dapibus Tellus Tortor Ridiculus</a>
              </div>
            </div>
          </div>
          <hr className="separator-xxl" />
        </fieldset>
      </form>
    )
  }
}

export default DesignForm
