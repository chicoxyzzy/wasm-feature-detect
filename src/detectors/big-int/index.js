/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default async function(bytes) {
  try {
    // This will throw a ReferenceError on platforms where BigInt is not
    // supported. Please do not change the right hand side value to BigInt
    // literal (i.e. 0n), cause in that case a SyntaxError will be thrown
    // before an execution.
    const n = BigInt(0);
    const instance = await WebAssembly.instantiate(bytes);
    return instance.instance.exports.b(n) === n;
  } catch {
    return false;
  }
}
